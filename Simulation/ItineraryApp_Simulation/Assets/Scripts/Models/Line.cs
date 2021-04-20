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

    [SerializeField] private Color _color;
    public Color Color
    {
        get
        {
            return _color;
        }
        set
        {
            _color = value;

            LineRenderer.material.color = Color;

            UpdateLineRenderer();
        }
    }

    public LineRenderer LineRenderer;

    public void UpdateLineRenderer()
    {
        LineRenderer.positionCount = Stations.Count;
        Debug.Log($"New position count = {LineRenderer.positionCount} for Line {Number}");
        LineRenderer.SetPositions(Stations.Select(station => station.transform.position).ToArray());
    }

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
