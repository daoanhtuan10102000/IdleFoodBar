using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CustomerTableMovement : Action
{
	[SerializeField] SharedGameObject tableHolder;
	[SerializeField] SharedTransform targetTableReserved;
	[SerializeField] SharedFloat speedCustomer;
	[SerializeField] SharedBool isOrdered;

	private Vector3 _targetPosition;


    public override void OnStart()
	{
		SetTargetMovePoint();
	}

	public override TaskStatus OnUpdate()
	{
		if(Vector3.Distance(transform.position,_targetPosition) >= 0.01f)
        {
			transform.position = Vector3.MoveTowards(transform.position, _targetPosition, speedCustomer.Value * Time.deltaTime);
			return TaskStatus.Running;
        }
        else
        {
			transform.position = _targetPosition;
			isOrdered.Value = true;
			return TaskStatus.Success;
        }
	}

	void SetTargetMovePoint()
    {
        _targetPosition = targetTableReserved.Value.position;
		_targetPosition.z = transform.position.z;
    }
}