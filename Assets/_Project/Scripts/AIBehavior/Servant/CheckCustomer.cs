using UnityEngine;
using BehaviorDesigner.Runtime;
using BehaviorDesigner.Runtime.Tasks;

public class CheckCustomer : Conditional
{
	[SerializeField] SharedGameObject tableHolder;
    [SerializeField] SharedTransform tablePos;
    [SerializeField] SharedTransform customer;

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
        if (customer.Value != null) return TaskStatus.Success;
        if (tableHolder.Value)
        {
		    foreach(Transform tr in tableHolder.Value.transform)
            {
                if (tr.GetComponent<TableController>().customer != null && tr.GetComponent<TableController>().customer.CheckOrderCustomer())
                {
                    if (!tr.GetComponent<TableController>().hadServantOrder)
                    {
                        customer.Value = tr.GetComponent<TableController>().customer.transform;
                        tablePos.Value = tr;
                        tablePos.Value.GetComponent<TableController>().SetUpServantServantOrder(true);
                        return TaskStatus.Success;
                    }
                }
            }
        }
        return TaskStatus.Failure;
    }
}