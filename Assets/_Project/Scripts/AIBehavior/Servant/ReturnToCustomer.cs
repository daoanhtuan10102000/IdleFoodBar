using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class ReturnToCustomer : Action
{
	public override void OnStart()
	{
		
	}

	public override TaskStatus OnUpdate()
	{
		return TaskStatus.Success;
	}
}