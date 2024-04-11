using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TableHolderController : MonoBehaviour
{
    public bool CheckEmptySit()
    {
        foreach(Transform tr in transform)
        {
            if (!tr.GetComponent<TableController>().reserveSit)
                return true;
        }
        return false;
    }

    public Transform GetEmtySit()
    {
        foreach (Transform tr in transform)
        {
            if (!tr.GetComponent<TableController>().reserveSit)
                return tr;
        }
        return null;
    }
}
