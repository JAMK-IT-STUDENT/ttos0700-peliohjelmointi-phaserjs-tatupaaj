using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LedgeAttach : MonoBehaviour {

    public GameObject TheLedge;
    public GameObject ThePlayer;

    private void OnTriggerEnter()
    {
        ThePlayer.transform.parent = TheLedge.transform;
    }


}
