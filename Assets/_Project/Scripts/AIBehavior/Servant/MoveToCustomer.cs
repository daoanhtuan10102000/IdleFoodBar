using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class MoveToCustomer : Action
{
	[SerializeField] SharedTransform tablePos;
	[SerializeField] SharedTransform customer;
	[SerializeField] SharedFloat speedServant;
	[SerializeField] SharedBool dealDone;
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
			if (dealDone.Value)
				customer.Value.GetComponent<CustomerController>().OrderDone.Value = true;
			else
				customer.Value.GetComponent<CustomerController>().BeenReceivedOrder = true;
			return TaskStatus.Success;
		}
	}
	void SetTargetMovePoint()
	{
		_targetPosition = tablePos.Value.position + new Vector3(0, -1f, 0);
		_targetPosition.z = transform.position.z;
	}
}