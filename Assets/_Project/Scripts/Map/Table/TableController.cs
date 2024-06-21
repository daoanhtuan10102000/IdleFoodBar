using Sirenix.OdinInspector;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TableController : MonoBehaviour
{
    [ReadOnly] public bool reserveSit;
    [ReadOnly] public bool onSit;
    [ReadOnly] public bool hadServantOrder;

    [ReadOnly] public CustomerController customer;

    public void SetUpSitStatus(bool isReserved)
    {
        reserveSit = isReserved;
    }

    public void SetUpOnSit(bool isOnSit)
    {
        onSit = isOnSit;
    }

    public void SetUpServantServantOrder(bool isServantOrder)
    {
        hadServantOrder = isServantOrder;
    }

    public void ResetTable()
    {
        reserveSit = false;
        onSit = false;
        hadServantOrder = false;

        customer = null;
    }
}
