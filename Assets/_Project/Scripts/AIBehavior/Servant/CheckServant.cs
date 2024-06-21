using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckServant : Conditional
{
	[SerializeField] SharedBool isHadOrder;
	
	public override TaskStatus OnUpdate()
	{
		if (isHadOrder.Value)
			return TaskStatus.Failure;
        else
			return TaskStatus.Success;
	}
}