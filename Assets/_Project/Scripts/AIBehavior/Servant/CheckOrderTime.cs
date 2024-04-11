using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckOrderTime : Conditional
{
	[SerializeField] float timeOrder;

	float time;

    public override void OnStart()
    {
		time = 0;
    }

    public override TaskStatus OnUpdate()
	{
		if (time < timeOrder)
		{
			time += Time.deltaTime;
			return TaskStatus.Running;
		}
		else return TaskStatus.Success;
	}
}