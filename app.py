from flask import Flask, redirect, render_template, send_from_directory, url_for

app = Flask(__name__,
            static_folder="./my-app/build",
            static_url_path="/")

if __name__ == "__main__":
    app.run()