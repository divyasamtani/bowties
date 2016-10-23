module API
  class BowtiesController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }
    before_action :set_bowties
    before_action :set_bowtie

    def index
      render json: @bowties
    end

    def show
      render json: @bowtie
    end

    def create
      @bowtie = Bowtie.new(bowtie_params)

      if @bowtie.save
        flash[:notice] = 'Bowtie created'
        render json: @bowtie, status:201, location: [:api, bowtie]
      else
        render json: bowtie.errors.messages, status: 422
      end
    end

    def update
      @bowtie.assign_attributes(bowtie_params)

      if @bowtie.save
        render json: @bowtie
        flash[:notice] = 'Bowtie updated'
        head 204
      else
        render json: bowtie.errors.messages, status:422
      end
    end

    def destroy
      if !@bowtie.nil?
        @bowtie.destroy
        flash[:notice] = 'Bowtie deleted'
        head 204
      end
    end


  private
    def set_bowties
       @bowties = Bowtie.all
    end

    def set_bowtie
      @bowtie = Bowtie.find_by(id: params[:id])
    end

    def bowtie_params
      params.require(:bowtie).permit(:material, :pattern, :style, :image_url, :wholesale_price, :retail_price)
    end
  end
end
