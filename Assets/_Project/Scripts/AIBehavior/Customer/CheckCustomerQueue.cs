using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckCustomerQueue : Conditional
{
    [SerializeField] SharedGameObject tableObject;
    [SerializeField] SharedTransform targetTableReserved;
    [SerializeField] SharedBool orderDone;
    private TableHolderController _tableHolderController;

    public override void OnStart()
    {
        _tableHolderController = tableObject.Value.GetComponent<TableHolderController>();
    }

    public override TaskStatus OnUpdate()
	{
        if (_tableHolderController.CheckEmptySit())
        {
            orderDone.Value = false;
            targetTableReserved.Value = _tableHolderController.GetEmtySit();
            targetTableReserved.Value.GetComponent<TableController>().SetUpSitStatus(true);
            targetTableReserved.Value.GetComponent<TableController>().customer = GetComponent<CustomerController>();
            return TaskStatus.Success;
        }
        else return TaskStatus.Failure;
    }
}