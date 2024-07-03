package com.example.endsem;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DatabaseHelper1 extends SQLiteOpenHelper {

    private static final String DATABASE_NAME = "mydatabase.db";
    private static final String TABLE_NAME = "mytable";
    private static final String COL_ID = "id";
    private static final String COL_VALUE1 = "value1";
    private static final String COL_VALUE2 = "value2";
    private static final String COL_VALUE3 = "value3";

    public DatabaseHelper1(Context context) {
        super(context, DATABASE_NAME, null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String createTableQuery = "CREATE TABLE " + TABLE_NAME + " (" +
                COL_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                COL_VALUE1 + " TEXT, " +
                COL_VALUE2 + " TEXT, " +
                COL_VALUE3 + " TEXT)";
        db.execSQL(createTableQuery);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
        onCreate(db);
    }

    // Method to insert data into the database
    public boolean insertData(String value1, String value2, String value3) {
        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put(COL_VALUE1, value1);
        contentValues.put(COL_VALUE2, value2);
        contentValues.put(COL_VALUE3, value3);
        long result = db.insert(TABLE_NAME, null, contentValues);
        return result != -1;
    }
}
