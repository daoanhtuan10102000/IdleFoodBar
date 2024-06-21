using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckWaitTime : Conditional
{
	[SerializeField] SharedBool beenOrdered;
	public override TaskStatus OnUpdate()
	{
		if (beenOrdered.Value) return TaskStatus.Running;
		return TaskStatus.Success;
	}
}