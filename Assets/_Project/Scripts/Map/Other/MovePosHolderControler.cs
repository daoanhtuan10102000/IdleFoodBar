using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovePosHolderControler : MonoBehaviour
{
    [SerializeField] Transform startSpawnPosition;
    [SerializeField] Transform startPosition;
    [SerializeField] Transform endSpawnPosition;
    [SerializeField] Transform endPosition;

    public Transform GetStartSpawnPosition()
    {
        return startSpawnPosition;
    }

    public Transform GetStartPosition()
    {
        return startPosition;
    }

    public Transform GetEndPosition()
    {
        return endPosition;
    }

    public Transform GetEndSpawnPosition()
    {
        return endSpawnPosition;
    }
}
