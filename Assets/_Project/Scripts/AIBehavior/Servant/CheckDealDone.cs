using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckDealDone : Conditional
{
	[SerializeField] Transform machinePos;

	public override void OnStart()
	{
		machinePos.GetComponent<MachineSpawnObjectController>().IsBusy = true;
	}

	public override TaskStatus OnUpdate()
	{
		if (machinePos.GetComponent<MachineSpawnObjectController>().IsBusy)
		{
			return TaskStatus.Running;
		}
		else return TaskStatus.Success;
	}
}