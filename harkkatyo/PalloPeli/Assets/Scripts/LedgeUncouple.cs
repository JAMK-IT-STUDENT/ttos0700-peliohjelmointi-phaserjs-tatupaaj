using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LedgeUncouple : MonoBehaviour {

    public GameObject ThePlayer;

    private void OnTriggerEnter()
    {
        ThePlayer.transform.parent = null;
    }



}
