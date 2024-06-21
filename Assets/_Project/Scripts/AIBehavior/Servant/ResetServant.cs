using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class ResetServant : Action
{
	[SerializeField] SharedTransform tablePos;
	[SerializeField] SharedTransform customer;

	public override TaskStatus OnUpdate()
	{
		tablePos.Value = null;
		customer.Value = null;
		return TaskStatus.Failure;
	}
}