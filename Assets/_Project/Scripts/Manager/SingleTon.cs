using UnityEngine;

namespace Shion
{
    public class SingleTon<T> : MonoBehaviour where T : MonoBehaviour
    {
        [SerializeField] bool isDontDestroyOnLoad;
        public static T Instance;
        public virtual void Awake()
        {
            if (Instance == null || Instance != this)
            {
                Instance = this as T;
            }
            else
            {
                Destroy(gameObject);
            }
            if (isDontDestroyOnLoad)
            {
                DontDestroyOnLoad(gameObject);
            }
        }
    }
}