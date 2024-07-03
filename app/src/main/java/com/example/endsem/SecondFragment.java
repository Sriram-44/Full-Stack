package com.example.endsem;

import android.annotation.SuppressLint;
import android.os.Bundle;
import androidx.fragment.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

public class SecondFragment extends Fragment {

    private EditText editTextValue1, editTextValue2, editTextValue3;
    private Button buttonIncrementDecrement, buttonSave, buttonNextPage;
    private DatabaseHelper1 databaseHelper;

    public SecondFragment() {
        // Required empty public constructor
    }

    @SuppressLint("MissingInflatedId")
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_third, container, false);

        editTextValue1 = view.findViewById(R.id.editTextValue1);
        editTextValue2 = view.findViewById(R.id.editTextValue2);
        editTextValue3 = view.findViewById(R.id.editTextValue3);
        buttonIncrementDecrement = view.findViewById(R.id.buttonIncrementDecrement);
        buttonSave = view.findViewById(R.id.buttonSave);
        buttonNextPage = view.findViewById(R.id.buttonNextPage);

        // Initialize your DatabaseHelper
        databaseHelper = new DatabaseHelper1(getContext());

        // Button click listeners
        buttonIncrementDecrement.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Implement increment/decrement logic for one of the values
                // For example, incrementing editTextValue1
                int value = Integer.parseInt(editTextValue1.getText().toString());
                value++; // Example increment
                editTextValue1.setText(String.valueOf(value));
            }
        });

        buttonSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                saveToDatabase();
            }
        });

        buttonNextPage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                navigateToNextPage();
            }
        });

        return view;
    }

    // Method to save data to database
    private void saveToDatabase() {
        String value1 = editTextValue1.getText().toString().trim();
        String value2 = editTextValue2.getText().toString().trim();
        String value3 = editTextValue3.getText().toString().trim();

        // Example: Saving values to database using your DatabaseHelper
        databaseHelper.insertData(value1, value2, value3);

        // Clear the editText fields after saving if needed
        editTextValue1.setText("");
        editTextValue2.setText("");
        editTextValue3.setText("");
    }

    // Method to navigate to the next page (replace with your actual navigation logic)
    private void navigateToNextPage() {
        // Replace with your navigation logic
    }
}
