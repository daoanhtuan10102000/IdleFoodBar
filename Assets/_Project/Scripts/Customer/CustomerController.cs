using Sirenix.OdinInspector;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using BehaviorDesigner.Runtime;

public class CustomerController : MonoBehaviour
{
    [ReadOnly, SerializeField] BehaviorTree behaviorTree;
    [ReadOnly] public SharedBool isOrdered;
    [ReadOnly] public SharedBool beenReceivedOrder;
    [ReadOnly] public SharedBool orderDone;
    public SharedBool IsOrdered
    {
        get 
        {
            isOrdered = behaviorTree.GetVariable("IsOrdered") as SharedBool;
            return isOrdered;
        }
        set
        {
            isOrdered = value;
            behaviorTree.SetVariable("IsOrdered", value);
        }
    }
    public SharedBool OrderDone
    {
        get
        {
            orderDone = behaviorTree.GetVariable("OrderDone") as SharedBool;
            return orderDone;
        }
        set
        {
            orderDone = value;
            behaviorTree.SetVariable("OrderDone", value);
        }
    }

    public SharedBool BeenReceivedOrder
    {
        get
        {
            beenReceivedOrder = behaviorTree.GetVariable("BeenReceivedOrder") as SharedBool;
            return beenReceivedOrder;
        }
        set
        {
            beenReceivedOrder = value;
            behaviorTree.SetVariable("BeenReceivedOrder", value);
        }
    }

    private void Start()
    {
        behaviorTree = GetComponent<BehaviorTree>();
        InitVariable();
    }


    void InitVariable()
    {
        GlobalVariables.Instance.SetVariable("TableHolder", VariableManager.Instance.tableHolder);
        GlobalVariables.Instance.SetVariable("MovePosHolder", VariableManager.Instance.movePosHolder);
    }

   
    public bool CheckOrderCustomer()
    {
        return IsOrdered.Value && !OrderDone.Value;
    }

    public void DestroyCustom()
    {
        Destroy(gameObject);
    }
}
