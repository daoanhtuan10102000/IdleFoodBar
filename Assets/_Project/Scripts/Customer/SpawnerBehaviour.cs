using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnerBehaviour : MonoBehaviour
{
    [SerializeField] GameObject customerObject;
    [SerializeField] float minSpawnTime;
    [SerializeField] float maxSpawnTime;

    float spawnTime;
    float timer;


    private void Start()
    {
        spawnTime = Random.Range(minSpawnTime, maxSpawnTime);
        timer = 0;
    }

    private void Update()
    {
        if (timer < spawnTime) timer += Time.deltaTime;
        else
        {
            timer = 0;
            spawnTime = Random.Range(minSpawnTime, maxSpawnTime);
            SpawnCustomerController();
        }
    }

    void SpawnCustomerController()
    {
        Instantiate(customerObject, transform);
    }
}
