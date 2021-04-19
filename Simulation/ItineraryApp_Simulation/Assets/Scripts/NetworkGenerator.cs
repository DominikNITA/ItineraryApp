using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;


[RequireComponent(typeof(StationNamesProvider))]
public class NetworkGenerator : MonoBehaviour
{
    public int Width = 2000;
    public int Height = 2000;
    public int TargetStationsCount = 30;
    public float AverageDistance = 400;
    public float DistanceSpread = 100;
    [Range(50f, 500f)] public float MergeDistance = 300;
    [Min(2)] public int MinStationsPerLine = 3;

    public StationNamesProvider StationNamesProvider;

    public List<Station> Stations;
    public List<Line> Lines;

    public Station StationPrefab;
    public Line LinePrefab;

    public GameObject LinesHandler;
    public GameObject StationsHandler;

    void ResetStationsAndLines()
    {
        Stations.ForEach(station => Destroy(station.gameObject));
        Lines.ForEach(line => Destroy(line.gameObject));

        Stations = new List<Station>();
        Lines = new List<Line>();
    }

    [ContextMenu("Generate new network")]
    void GenerateNewNetwork()
    {
        StopAllCoroutines();

        ResetStationsAndLines();

        StartCoroutine("GenerateNewNetworkCoroutine");
    }

    private IEnumerator GenerateNewNetworkCoroutine()
    {
        StationNamesProvider.Count = TargetStationsCount;
        var stationNames = StationNamesProvider.GetRandomNames().Result;

        var minimalLineLength = (AverageDistance + DistanceSpread / 2) * (MinStationsPerLine - 1);

        while (TargetStationsCount - Stations.Count >= MinStationsPerLine)
        {
            var startPosition = GenerateRandomPoint();
            var endPosition = GenerateRandomPoint();
            if (Vector2Int.Distance(startPosition, endPosition) < minimalLineLength)
            {
                continue;
            }

            var newLine = CreateLine();

            //Create starting station
            CreateStation(startPosition, stationNames[Stations.Count], newLine);

            var previousStationPosition = startPosition;
            while (TargetStationsCount - Stations.Count > 0
                && Vector2Int.Distance(previousStationPosition, endPosition) > AverageDistance)
            {
                var stationPosition = GetNextStationPosition(endPosition, previousStationPosition);

                var station = CreateStation(stationPosition, stationNames[Stations.Count], newLine);
                previousStationPosition = station.MapPosition;

                Debug.Log("Just before entering renderer update");
                newLine.UpdateLineRenderer();

                yield return new WaitForSeconds(0.45f);
            }

            Lines.Add(newLine);
            yield return new WaitForSeconds(1f);
        }
    }
    private Vector2Int GenerateRandomPoint()
    {
        return new Vector2Int(
            (int)(Random.value * Width),
            (int)(Random.value * Height)
            );
    }

    private Vector2Int GetNextStationPosition(Vector2Int endPosition, Vector2Int previousStationPosition)
    {
        //Thales
        var dx = endPosition.x - previousStationPosition.x;
        var dy = endPosition.y - previousStationPosition.y;
        var h = Vector2Int.Distance(previousStationPosition, endPosition);
        var d = AverageDistance - DistanceSpread / 2 + Random.value * DistanceSpread;

        return new Vector2Int(
            Mathf.RoundToInt(previousStationPosition.x + (d * dx) / h),
            Mathf.RoundToInt(previousStationPosition.y + (d * dy) / h)
            );
    }

    private Color GetDistinguishableColor(int n)
    {
        //Use golden ratio to generate hue in range [0f,1f]
        float hue = ((n * 137.508f) % 100) / 100f;
        return Color.HSVToRGB(hue, 0.63f, 0.61f);
    }

    private Station CreateStation(Vector2Int mapPosition, string stationName, Line line)
    {
        var closestStation = Stations.OrderBy(station => Vector2Int.Distance(station.MapPosition, mapPosition)).FirstOrDefault();
        if (closestStation && Vector2Int.Distance(closestStation.MapPosition, mapPosition) < MergeDistance)
        {
            closestStation.Lines.Add(line);
            line.Stations.Add(closestStation);
            return closestStation;
        }

        var newStation = Instantiate(StationPrefab, new Vector3(mapPosition.x / 250f, mapPosition.y / 250f, 0), Quaternion.identity, StationsHandler.transform);
        newStation.Name = stationName;
        newStation.Lines.Add(line);
        newStation.MapPosition = mapPosition;
        newStation.gameObject.name = $"Station {stationName}";

        Stations.Add(newStation);
        line.Stations.Add(newStation);

        return newStation;
    }

    private Line CreateLine()
    {
        var newLine = Instantiate(LinePrefab, new Vector3(0, 0, 0), Quaternion.identity, LinesHandler.transform);
        newLine.Number = Lines.Count + 1;
        newLine.Color = GetDistinguishableColor(newLine.Number);
        newLine.gameObject.name = $"Line {newLine.Number}";
        return newLine;
    }
}
