using System.Collections;
using UnityEngine.UI;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerControl : MonoBehaviour {

    public float speed;
    public float jumpSpeed;
    public bool isOnGround;
    public Text countText;
    public Text allText;

    public Rigidbody rb;
    private int count;

 

    void Start()
    {
        rb = GetComponent<Rigidbody>();
        count = 0;
        SetCountText();
        allText.text = "";
    }


    void FixedUpdate ()
    {
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");
        float jump;

        isOnGround = Physics.Raycast(transform.position, Vector3.down, 1f);

        if (Input.GetKeyDown(KeyCode.Space) && isOnGround)
        {
            jump = 30.1f;
        }
        else jump = 0;

        Vector3 movement = new Vector3(moveHorizontal, jump, moveVertical);

        rb.AddForce(movement * speed);
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("PickUp"))
        {
            other.gameObject.SetActive(false);
            count = count + 1;
            SetCountText();
        }
    }

    void SetCountText()
    {
        countText.text = "Count: " + count.ToString() + "/12";
        if (count >= 12)
        {
            allText.text = "That's all of them!!";
        }
    }
}
