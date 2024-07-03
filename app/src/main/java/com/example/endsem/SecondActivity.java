package com.example.endsem;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {

    private EditText editTextValue1, editTextValue2, editTextValue3;
    private Button buttonEdit, buttonDelete;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        // Initialize views
        editTextValue1 = findViewById(R.id.editTextValue1);
        editTextValue2 = findViewById(R.id.editTextValue2);
        editTextValue3 = findViewById(R.id.editTextValue3);
        buttonEdit = findViewById(R.id.buttonEdit);
        buttonDelete = findViewById(R.id.buttonDelete);

        // Get data passed from ThirdFragment
        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            String value1 = extras.getString("value1");
            String value2 = extras.getString("value2");
            String value3 = extras.getString("value3");

            // Set data to EditTexts
            editTextValue1.setText(value1);
            editTextValue2.setText(value2);
            editTextValue3.setText(value3);
        }

        // Edit button click listener
        buttonEdit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Implement edit functionality here
                // Example: Update data in database or perform desired edit operation
                Toast.makeText(SecondActivity.this, "Edit button clicked", Toast.LENGTH_SHORT).show();
            }
        });

        // Delete button click listener
        buttonDelete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Implement delete functionality here
                // Example: Delete data from database or perform desired delete operation
                Toast.makeText(SecondActivity.this, "Delete button clicked", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
