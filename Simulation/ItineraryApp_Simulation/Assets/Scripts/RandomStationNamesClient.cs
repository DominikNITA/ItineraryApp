using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;
using Grpc.Core;
using Itinerary;

public class RandomStationNamesClient
{
    private readonly StationNamesGenerator.StationNamesGeneratorClient _client;
    private readonly Channel _channel;
    private readonly string _server = "localhost:3000";

    internal RandomStationNamesClient()
    {
        _channel = new Channel(_server, ChannelCredentials.Insecure);
        _client = new StationNamesGenerator.StationNamesGeneratorClient(_channel);
    }
    
    internal List<string> GetRandomStationNames(int count, string region)
    {
        RandomStationNamesRequest randomStationNamesRequest = new RandomStationNamesRequest();
        randomStationNamesRequest.Count = count;
        randomStationNamesRequest.Region = region;
        var randomStationNames = _client.GetRandomStationNames(randomStationNamesRequest).StationNames;

        return randomStationNames.Select(name => name).ToList();
    }
}
