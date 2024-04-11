using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class MoveToMachine : Action
{
	[SerializeField] SharedTransform machinePos;
	[SerializeField] SharedFloat speedServant;
	private Vector3 _targetPosition;

	public override void OnStart()
	{
		SetTargetMovePoint();
	}

	public override TaskStatus OnUpdate()
	{
		if (Vector3.Distance(transform.position, _targetPosition) >= 0.01f)
		{
			transform.position = Vector3.MoveTowards(transform.position, _targetPosition, speedServant.Value * Time.deltaTime);
			return TaskStatus.Running;
		}
		else
		{
			transform.position = _targetPosition;
			return TaskStatus.Success;
		}
	}

	void SetTargetMovePoint()
	{
		_targetPosition = machinePos.Value.position + new Vector3(.8f, 0, 0);
		_targetPosition.z = transform.position.z;
	}
}