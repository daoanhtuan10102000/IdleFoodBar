using Sirenix.OdinInspector;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MachineSpawnObjectController : MonoBehaviour
{
    [ReadOnly] public bool isBusy;

    [SerializeField] float timeCounter;
    [SerializeField] Image timeFill;

    float time;

    public bool IsBusy
    {
        get { return isBusy; }
        set
        {
            isBusy = value;
            if (isBusy)
                time = 0;
            else
                timeFill.fillAmount = 0;
        }
    }

    private void Update()
    {
        if (!IsBusy) return;
        if (time < timeCounter)
        {
            time += Time.deltaTime;
            TimeBusy(time);
        }
        else
            IsBusy = false;
    }

    void TimeBusy(float _time)
    {
        float ratio = _time / timeCounter;
        timeFill.fillAmount = ratio;
    }
}
