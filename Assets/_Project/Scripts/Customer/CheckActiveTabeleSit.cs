using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckActiveTabeleSit : Conditional
{
	[SerializeField] SharedTransform targetTableReserved;
	public override TaskStatus OnUpdate()
	{
		if (targetTableReserved.Value) return TaskStatus.Success;
		else return TaskStatus.Failure;
	}
}