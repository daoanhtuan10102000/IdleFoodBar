using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class MoveToCustomer : Action
{
	[SerializeField] SharedTransform tablePos;
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
		_targetPosition = tablePos.Value.position + new Vector3(0, -1f, 0);
		_targetPosition.z = transform.position.z;
	}
}