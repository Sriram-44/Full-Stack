package com.example.endsem;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class SignUpActivity extends AppCompatActivity {

    DatabaseHelper myDb;
    EditText etSignupUsername, etPhone, etEmail, etSignupPassword;
    Button btnSignup;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        myDb = new DatabaseHelper(this);

        etSignupUsername = findViewById(R.id.etSignupUsername);
        etPhone = findViewById(R.id.etPhone);
        etEmail = findViewById(R.id.etEmail);
        etSignupPassword = findViewById(R.id.etSignupPassword);
        btnSignup = findViewById(R.id.btnSignup);

        btnSignup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String username = etSignupUsername.getText().toString();
                String phone = etPhone.getText().toString();
                String email = etEmail.getText().toString();
                String password = etSignupPassword.getText().toString();

                boolean isInserted = myDb.insertData(username, phone, email, password);
                if (isInserted) {
                    Toast.makeText(SignUpActivity.this, "Signup successful", Toast.LENGTH_SHORT).show();
                    finish();
                } else {
                    Toast.makeText(SignUpActivity.this, "Signup failed", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
