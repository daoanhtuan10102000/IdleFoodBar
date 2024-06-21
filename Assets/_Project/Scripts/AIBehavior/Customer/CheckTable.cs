using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckTable : Conditional
{
	[SerializeField] SharedGameObject tableObject;
	private TableHolderController _tableHolderController;

    public override void OnStart()
    {
        _tableHolderController = tableObject.Value.GetComponent<TableHolderController>();
    }

    public override TaskStatus OnUpdate()
	{
        if (_tableHolderController.CheckEmptySit())
            return TaskStatus.Failure;
        else return TaskStatus.Success;
	}
}