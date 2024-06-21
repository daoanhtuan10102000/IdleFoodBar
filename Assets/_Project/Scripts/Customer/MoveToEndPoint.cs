using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class MoveToEndPoint : Action
{
	[SerializeField] SharedFloat speedCustomer;
	[SerializeField] SharedGameObject movePointHolder;
	[SerializeField] SharedTransform targetTableReserved;

	private MovePosHolderControler _movePosHolderControler;
	private Vector3 _targetPosition;
	public override void OnStart()
	{
		_movePosHolderControler = movePointHolder.Value.GetComponent<MovePosHolderControler>();
		targetTableReserved.Value?.GetComponent<TableController>().ResetTable();
		SetTargetMovePoint();
	}
	public override TaskStatus OnUpdate()
	{
		if (Vector3.Distance(transform.position, _targetPosition) >= 0.01f)
		{
			transform.position = Vector3.MoveTowards(transform.position, _targetPosition, speedCustomer.Value * Time.deltaTime);
			return TaskStatus.Running;
		}
		else
		{
			transform.position = _targetPosition;
			GetComponent<CustomerController>().DestroyCustom();
			return TaskStatus.Success;
		}
	}

	void SetTargetMovePoint()
	{
		_targetPosition = _movePosHolderControler.GetEndSpawnPosition().position;
	}
}