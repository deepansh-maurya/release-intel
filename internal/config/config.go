package config

import "os"

type Config struct {
	Port  string
	Dburl string
	Env   string
}

func Load() *Config {

	cfg := &Config{
		Port:  getEnv("port", 8080),
		Dburl: getEnv("DB_URL", nil),
		Env:   getEnv("Env", "dev"),
	}
	return cfg
}

func getEnv(key, fallback string) {
	val := os.Getenv((key))

	if val == "" {
		return fallback
	}
	return val

}
