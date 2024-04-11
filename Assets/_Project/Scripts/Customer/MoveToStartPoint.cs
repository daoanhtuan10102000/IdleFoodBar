using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class MoveToStartPoint : Action
{
	[SerializeField] SharedGameObject movePointHolder;
	[SerializeField] SharedFloat speedCustomer;

	private MovePosHolderControler _movePosHolderControler;
	private Vector3 _targetPosition;
	private Vector3 _targetSpawnPosition;

	public override void OnStart()
	{
		_movePosHolderControler = movePointHolder.Value.GetComponent<MovePosHolderControler>();

		SetTargetMovePoint();
		transform.position = _targetSpawnPosition;
	}

	public override TaskStatus OnUpdate()
	{
		if(Vector3.Distance(transform.position, _targetPosition) >= 0.01f)
        {
			transform.position = Vector3.MoveTowards(transform.position, _targetPosition, speedCustomer.Value * Time.deltaTime);
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
		_targetSpawnPosition = _movePosHolderControler.GetStartSpawnPosition().position;
		_targetPosition = _movePosHolderControler.GetStartPosition().position;
		_targetPosition.z = transform.position.z;
		_targetSpawnPosition.z = transform.position.z;
    }
}