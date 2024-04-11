using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class ReceivedFoodController : Action
{
	[SerializeField] SharedBool orderDone;
	public override void OnStart()
	{
		
	}

	public override TaskStatus OnUpdate()
	{
		orderDone.Value = true;
		return TaskStatus.Success;
	}
}