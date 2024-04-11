using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckOnWay : Conditional
{
	[SerializeField] SharedTransform targetTableReserved;
	[SerializeField] float checkThreshHold;
	public override TaskStatus OnUpdate()
	{
		if (Mathf.Abs(transform.position.x - targetTableReserved.Value.position.x) >= checkThreshHold)
			return TaskStatus.Success;
		else return TaskStatus.Failure;
	}
}