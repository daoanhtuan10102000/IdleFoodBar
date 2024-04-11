using Sirenix.OdinInspector;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using BehaviorDesigner.Runtime;

public class CustomerController : MonoBehaviour
{
    [ReadOnly, SerializeField] BehaviorTree behaviorTree;
    [ReadOnly] public SharedBool isOrdered;
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
            behaviorTree.SetVariable("IsOrdered", value);
        }
    }
    public SharedBool OrderDone
    {
        get
        {
            isOrdered = behaviorTree.GetVariable("OrderDone") as SharedBool;
            return isOrdered;
        }
        set
        {
            behaviorTree.SetVariable("OrderDone", value);
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
}
