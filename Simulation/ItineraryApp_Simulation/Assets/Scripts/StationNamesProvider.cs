using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Net;
using System;
using System.IO;
using System.Text;
using UnityEngine.Networking;
using System.Net.Http;
using System.Threading.Tasks;

public class StationNamesProvider : MonoBehaviour
{
    public int Count;
    public String RegionCode;

    private RandomStationNamesClient _stationNamesClient;

    private void Start()
    {
        _stationNamesClient = new RandomStationNamesClient();
    }

    [ContextMenu("Generate random station names")]
    public async Task<List<string>> GetRandomNames()
    {
        var stationNames = _stationNamesClient.GetRandomStationNames(Count, RegionCode);
        foreach (var stationName in stationNames)
        {
            Debug.Log(stationName);
        }
        return stationNames;
/*        Debug.Log("in random names");
        var values = new Dictionary<string, string>
                {
                    { "records", Count+"" },
                    { "region", RegionCode }
                };

        var content = $"";
        Debug.Log(content);
        var response = await client.PostAsync("http://www.example.com/recepticle.aspx", new StringContent(content, Encoding.UTF8, "application/json"));

        var responseString = await response.Content.ReadAsStringAsync();

        Debug.Log(responseString);*/
        
    }
}
