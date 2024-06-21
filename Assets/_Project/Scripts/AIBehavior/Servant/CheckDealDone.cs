using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckDealDone : Conditional
{
	[SerializeField] Transform machinePos;
	[SerializeField] bool chekingMachine;

	public override void OnStart()
	{
		if (!chekingMachine)
			machinePos.GetComponent<MachineSpawnObjectController>().IsBusy = true;
	}

	public override TaskStatus OnUpdate()
	{
		if (machinePos.GetComponent<MachineSpawnObjectController>().IsBusy)
			return TaskStatus.Running;
		else return TaskStatus.Success;
	}
}