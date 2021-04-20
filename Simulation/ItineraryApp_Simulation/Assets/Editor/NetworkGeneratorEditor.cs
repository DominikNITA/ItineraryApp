using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(NetworkGenerator))]
public class NetworkGeneratorEditor : Editor
{
    public override void OnInspectorGUI()
    {
        DrawDefaultInspector();

        var networkGenerator = (NetworkGenerator)target;

        GUILayout.BeginHorizontal();

        if (GUILayout.Button("Generate"))
        {
            networkGenerator.GenerateNewNetwork();
        }

        if (GUILayout.Button("Reset"))
        {
            networkGenerator.ResetStationsAndLines();
        }

        GUILayout.EndHorizontal();
    }
}
