using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckCustomer : Conditional
{
	[SerializeField] SharedGameObject tableHolder;
    [SerializeField] SharedTransform tablePos;

    public override void OnStart()
    {
        base.OnStart();
    }
    public override TaskStatus OnUpdate()
	{
        return GetOrderTablePos();
	}

    TaskStatus GetOrderTablePos()
    {
		foreach(Transform tr in tableHolder.Value.transform)
        {
            if (tr.GetComponent<TableController>().customer != null && tr.GetComponent<TableController>().customer.CheckOrderCustomer())
            {
                if (!tr.GetComponent<TableController>().hadServantOrder)
                {
                    tablePos.Value = tr;
                    tablePos.Value.GetComponent<TableController>().SetUpServantServantOrder(true);
                }
                return TaskStatus.Success;
            }
        }
        return TaskStatus.Failure;
    }
}