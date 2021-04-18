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
        var stationNames = StationNamesProvider.GetRandomNames().Result;
        while (TargetStationsCount - Stations.Count >= MinStationsPerLine)
        {
            var startPosition = GenerateRandomPoint();
            var endPosition = GenerateRandomPoint();
            if (Vector2Int.Distance(startPosition, endPosition) < AverageDistance * (MinStationsPerLine - 1))
            {
                continue;
            }

            var newLine = Instantiate(LinePrefab, new Vector3(0, 0, 0), Quaternion.identity);
            newLine.Number = Lines.Count;
            newLine.Color = GetDistinguishableColor(newLine.Number);

            //Create starting station
            newLine.Stations.Add(CreateStation(startPosition, stationNames[Stations.Count], newLine));

            var lastStationPosition = startPosition;
            while (TargetStationsCount - Stations.Count > 0 
                && Vector2Int.Distance(lastStationPosition,endPosition) > AverageDistance)
            {
                var dx = endPosition.x - lastStationPosition.x;
                var dy = endPosition.y - lastStationPosition.y;
                var h = Vector2Int.Distance(lastStationPosition, endPosition);
                var d = AverageDistance - DistanceSpread / 2 + Random.value * DistanceSpread;

                var stationPosition = new Vector2Int(
                    Mathf.RoundToInt(lastStationPosition.x + (d * dx) / h),
                    Mathf.RoundToInt(lastStationPosition.y + (d * dy) / h)
                    );

                var station = CreateStation(stationPosition, stationNames[Stations.Count], newLine);
                lastStationPosition = station.MapPosition;

                yield return new WaitForSeconds(0.2f);
            }

            Lines.Add(newLine);
        }
    }
    private Vector2Int GenerateRandomPoint()
    {
        return new Vector2Int(
            (int)(Random.value * Width),
            (int)(Random.value * Height)
            );
    }

    private Color GetDistinguishableColor(int n)
    {
        //Use golden ratio to generate hue in range [0f,1f]
        float hue = ((n * 137.508f) % 100) / 100f;
        return Color.HSVToRGB(hue, 0.63f, 0.61f);
    }

    private Station CreateStation(Vector2Int position, string stationName, Line line)
    {
        var closestStation = Stations.OrderBy(station => Vector2Int.Distance(station.MapPosition, position)).First();
        if (Vector2Int.Distance(closestStation.MapPosition, position) < MergeDistance)
        {
            closestStation.Lines.Add(line);
            return closestStation;
        }

        var newStation = Instantiate(StationPrefab);
        newStation.Name = stationName;
        newStation.Lines.Add(line);
        newStation.MapPosition = position;
        Stations.Add(newStation);
        return newStation;
    }
}
