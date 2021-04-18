using System.Collections;
using System.Collections.Generic;
using UnityEngine;


[RequireComponent(typeof (StationNamesProvider))]
public class NetworkGenerator : MonoBehaviour
{
    public int Width = 2000;
    public int Height = 2000;
    public int TargetStationsCount = 30;
    public float AverageDistance = 400;
    [Range(50f, 500f)] public float MergeDistance = 300;

    public StationNamesProvider StationNamesProvider;

    [ContextMenu("Generate new network")]
    void GenerateNewNetwork()
    {
        StopAllCoroutines();
        StartCoroutine("GenerateNewNetworkCoroutine");
    }

    private IEnumerator GenerateNewNetworkCoroutine()
    {
        yield return new WaitForSeconds(0.2f);
    }
}
