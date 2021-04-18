using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Itinerary;
using System.Linq;

public class Station : MonoBehaviour
{
    public int Id;
    public string Name;
    public List<Line> Lines;

    public StationProto ToStationProto(bool includeLineObjects = false)
    {
        var stationProto = new StationProto();
        stationProto.Id = Id;
        stationProto.Name = Name;
        if (includeLineObjects)
        {
            stationProto.LineObjects = Line.ToLineProtos(Lines);
        }
        else
        {
            stationProto.LineIds = Utility.ToIdProtos(Lines.Select(line => line.Number));
        }
        return stationProto;
    }

    public static StationProtos ToStationProtos(IEnumerable<Station> stations, bool includeLineObjects = false)
    {
        var stationProtos = new StationProtos();
        stationProtos.Stations.AddRange(stations.Select(station => station.ToStationProto(includeLineObjects)));
        return stationProtos;
    }
}
