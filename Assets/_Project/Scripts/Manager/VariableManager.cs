using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using BehaviorDesigner.Runtime;
using Shion;

public class VariableManager : SingleTon<VariableManager>
{
    public SharedGameObject tableHolder;
    public SharedGameObject movePosHolder;

    public SharedTransform customerHolder; 
}
