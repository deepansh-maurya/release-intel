package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

)

func main() {
	if err := run(); err != nil {
		log.Fatal(err)
	}
}

func run(){

	/**
		laod config	
	*/


	cfg := config.Load()

	srv := server.New(cfg)

	httpServer := &http.Server(
		Addr: ":"  + cfg.Port,
		Handler: srv.Router(),
		ReadTimout: 10 * time.Second,
		WriteTimout: 10 * time.Second,
		IdleTimout: 30 * time.Second
	)

	ctx, stop := signal.NotifyContext(context.Background(),os.Interrupt,syscall.SIGTERM)
	defer stop()

	go func ()  {
		log.Println("server started at port",cfg.Port)
		if err := httpServer.ListerAndServe(); err != nil && err != http.ErrServerClosed {
			loag.Fatal(err)
		}
	}

	<-ctx.Done()

	log.Println(" shutting down")
 shutdownCtx, cancel := context.WithTimeout(context.Background(), 5 * time.Second)

 defer cancel()

 return httpServer.Shutdown(shutdownCtx)

}