using Itinerary;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class Utility
{
    public static IdProtos ToIdProtos(IEnumerable<int> ids)
    {
        var idProtos = new IdProtos();
        idProtos.Ids.AddRange(ids);
        return idProtos;
    }
}
