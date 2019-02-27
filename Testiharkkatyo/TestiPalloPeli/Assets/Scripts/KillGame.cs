using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KillGame : MonoBehaviour {

    void Update () {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            Application.Quit();
        }
    }
}
