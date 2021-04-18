using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Itinerary;
using System.Linq;

[RequireComponent(typeof(LineRenderer))]
public class Line : MonoBehaviour
{
    public int Number;
    public List<Station> Stations = new List<Station>();
    public Color Color = Color.red;

    public LineRenderer LineRenderer;

    public LineProto ToLineProto(bool includeStationObjects = false)
    {
        var lineProto = new LineProto();
        lineProto.Id = Number;
        if (includeStationObjects)
        {
            lineProto.StationObjects = Station.ToStationProtos(Stations);
        }
        else
        {
            lineProto.StationIds = Utility.ToIdProtos(Stations.Select(station => station.Id));
        }
        //TODO: add color to proto
        return lineProto;
    }

    public static LineProtos ToLineProtos(IEnumerable<Line> lines, bool includeStationObjects = false)
    {
        var lineProtos = new LineProtos();
        lineProtos.Lines.AddRange(lines.Select(line => line.ToLineProto
        (includeStationObjects)));
        return lineProtos;
    }
}
