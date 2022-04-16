package gamemania;

import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteLoginGameMania {
      private WebDriver driver;
      
      @Before       
      public void abrirNavegador() {
    	 System.setProperty("webdriver.chrome.driver", "C:\\Arquivos de Programas\\chromedriver\\chromedriver.exe");
    	 driver = new ChromeDriver();
    	 driver.manage().window().maximize();    	
      }
      
      @Test
      public void testeNavegador() {
    	  driver.get("http://localhost:4200/login");
    	  driver.manage().timeouts().implicitlyWait(3,  TimeUnit.SECONDS);    	  
    	  WebElement inputEmail = driver.findElement(By.id("emailLogin"));
    	  WebElement inputSenha = driver.findElement(By.id("senhaLogin"));
    	  WebElement botaoLogin = driver.findElement(By.className("enviar-form"));
    	  
    	 
    	     	      	  
    	  
    	  String[] listaSenhas = {"casa123", "praiaABC", "cinema123", "bar123"};
    	  
    	  for(int tentativas = 0; tentativas < listaSenhas.length; tentativas++) {
    		  
    		  try {
    		  inputEmail.clear();
    		  inputSenha.clear();
    		  
    		  inputEmail.sendKeys("tiago@email.com");
        	  inputSenha.sendKeys(listaSenhas[tentativas]);       	  
        	  botaoLogin.click();
        	       	          	  
        	  Thread.sleep(3000);
    		  
    	  }catch (InterruptedException e) {
    		  e.printStackTrace();
    	  }
      }
   }
      
}
