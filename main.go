package main

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"
	"text/template"
	"time"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	e.Static("/public", "public")

	e.GET("/", home)
	e.GET("/contact", contact)
	e.GET("/project", project)
	e.GET("/testimonial", testimonial)
	e.GET("/projectdetail:id", projectDetail)
	e.POST("addProject", addProject)

	e.Logger.Fatal(e.Start("localhost:5000"))
}

func home(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/index.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}

func contact(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/contact.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}
func project(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/project.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}
func testimonial(c echo.Context) error {
	var tmpl, err = template.ParseFiles("views/testimonial.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), nil)
}
func projectDetail(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	data := map[string]interface{}{
		"Id":      id,
		"Title":   "Dumbways Web App",
		"Content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,placeat recusandae, doloremque vel et in impedit omnis velit idporro animi, optio alias dolorem. Beatae a facilis earum!Praesentium at voluptates amet assumenda soluta earum eos nesciunt		eaque. Dolorum recusandae quo et delectus eius optio temporibusdebitis voluptates sed nam?",
	}

	var tmpl, err = template.ParseFiles("views/project-detail.html")

	if err != nil {
		return c.JSON(http.StatusInternalServerError, map[string]string{"message": err.Error()})
	}

	return tmpl.Execute(c.Response(), data)
}

func addProject(c echo.Context) error {
	nama := c.FormValue("input-nama")
	start := c.FormValue("input-start")
	end := c.FormValue("input-end")
	description := c.FormValue("input-deskripsi")
	checkbox := c.Request().Form["tech"]

	startDate, err := time.Parse("2006-01-02", start)
	if err != nil {
		return err
	}
	endDate, err := time.Parse("2006-01-02", end)
	if err != nil {
		return err
	}

	duration := int(endDate.Sub(startDate).Hours() / 24)
	var durationOutput string

	if duration <= 7 {
		durationOutput = fmt.Sprintf("%d day(s)", duration)
	} else if duration > 7 && duration <= 30 {
		weeks := duration / 7
		days := duration % 7
		durationOutput = fmt.Sprintf("%d week(s) %d day(s)", weeks, days)
	} else if duration > 30 && duration <= 365 {
		months := duration / 30
		durationOutput = fmt.Sprintf("%d month(s)", months)
	} else {
		years := duration / 365
		durationOutput = fmt.Sprintf("%d year(s)", years)
	}

	fmt.Println("name : " + nama)
	fmt.Println("start : " + start)
	fmt.Println("end : " + end)
	fmt.Println("Duration: ", durationOutput)
	fmt.Println("description : " + description)
	fmt.Println("Technologies : ", strings.Join(checkbox, ", "))

	return c.Redirect(http.StatusMovedPermanently, "/project")
}
