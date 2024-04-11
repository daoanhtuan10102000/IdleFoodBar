using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class OderController : Conditional
{
	[SerializeField] SharedBool orderDone;

	public override void OnStart()
	{
		
	}

	public override TaskStatus OnUpdate()
	{
		if (orderDone.Value)
			return TaskStatus.Success;
		else return TaskStatus.Failure;
	}
}